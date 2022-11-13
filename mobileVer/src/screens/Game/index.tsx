import {SafeAreaView} from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import logoImg from '../../assets/logo-nlw-esports.png' 

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard/index';
import { useEffect, useState } from 'react';
import local from '../../const'
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const game = route.params as GameParams
  const navigation = useNavigation();
  const [discordSelected, setDiscordSelected] = useState('sdf');

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://${local}:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left" 
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image 
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading 
        title={game.title}
        subtitle="Concenct-se e comece a jogar" />

        <FlatList  
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard 
            data={item} 
            onConnect={() => {}} 
            />
          )}
          horizontal
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Ainda não há duos cadastrados para este jogo
            </Text>
          )} />

          <DuoMatch 
            visible={discordSelected.length > 0}
            discord="https://discord.gg/8J2Y2J"
            onClose={() => setDiscordSelected('')}
          />
        </SafeAreaView>
    </Background>
  );
}