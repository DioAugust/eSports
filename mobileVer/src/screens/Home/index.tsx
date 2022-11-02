
import { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/logo-nlw-esports.png'

import { Background } from '../../components/Background';
import { GamingCard, GameCardProps } from '../../components/GamingCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';



export function Home() {
  const [games, setGames] = useState<GameCardProps[]>();

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.1.4:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logo}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar"
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GamingCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
            )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}