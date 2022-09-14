
import { View, Image, FlatList } from 'react-native';
import logo from '../../assets/logo-nlw-esports.png'
import { GamingCard } from '../../components/GamingCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games'

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar"
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GamingCard
            data={item}
          />)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}