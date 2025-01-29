import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {firebase} from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from 'react-query';
import queryClient from './src/api/queryclient';
import RootNavigator from './src/navigators/RootNavigator';
import useUserStore from './src/store/useUserStore';

const STORE_FCM_TOKEN_URL = 'https://storefcmtoken-x5kffu2hwa-du.a.run.app';

function App(): React.JSX.Element {
  const {userInfo} = useUserStore();

  async function requestUserPermission() {
    const authStatus = await firebase.messaging().requestPermission();
    console.log('Android authStatus:', authStatus);
  }

  async function getFcmTokenAndStore() {
    try {
      const token = await firebase.messaging().getToken();
      console.log('[RN] FCM 토큰:', token);

      const response = await fetch(STORE_FCM_TOKEN_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: userInfo.userId, // => fcmTokens/2023010102
          token: token,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('[RN] storeFcmToken result:', result);
      } else {
        console.log(
          '[RN] storeFcmToken error:',
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.log('[RN] Error storing FCM token:', error);
    }
  }
  async function createNotificationChannel() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH, // 중요도 설정
    });
    console.log('알림 채널 생성 완료:', channelId);
  }
  firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('백그라운드 메시지 수신:', remoteMessage);

    // Notifee로 로컬 알림 표시
    await notifee.displayNotification({
      title: remoteMessage.notification?.title || remoteMessage.data?.title,
      body: remoteMessage.notification?.body || remoteMessage.data?.body,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher', // 리소스에 추가된 아이콘
      },
    });
  });
  notifee.onBackgroundEvent(async ({type, detail}) => {
    console.log('Notifee 백그라운드 이벤트 발생:', {type, detail});

    if (type === EventType.DISMISSED) {
      console.log('알림이 해제되었습니다.');
    } else if (type === EventType.PRESS) {
      console.log('알림이 눌렸습니다.');
    }
  });

  useEffect(() => {
    if (userInfo.userId) {
      requestUserPermission();
      getFcmTokenAndStore();
    }
    createNotificationChannel();
  }, [userInfo.userId]);
  useEffect(() => {
    const unsubscribe = firebase.messaging().onMessage(async remoteMessage => {
      console.log('포그라운드 메시지 수신:', remoteMessage);

      await notifee.displayNotification({
        title: remoteMessage.notification?.title || remoteMessage.data?.title,
        body: remoteMessage.notification?.body || remoteMessage.data?.body,
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher', // 리소스에 추가된 아이콘
        },
      });
    });

    return unsubscribe;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
