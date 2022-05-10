import { Text, View } from "./Themed";
import { StyleSheet, Button, Platform,Linking } from "react-native";

export default function RentDetail({ route, navigation }) {
  const { rent } = route.params;
  const mapUrl = Platform.select({
    ios: `maps:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}` ,
    android: `geo:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
    web: `https://www.google.com/maps/search/?api=1&query=${rent.localizacao.latitude},${rent.localizacao.longitude}`
 })

  const WhatsApp = (text, phone) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  }
 ;
 // 27.597355250972583, -48.55176328456648
return (
  // <View>
  //   <Text><h2>{rent.nome}</h2></Text>
  //   <Text><b>Quantidade de alojamentos:</b> {rent.quantidade_quartos}</Text>
  //   <Text><b>Endereço:</b> {rent.endereco}</Text>
  //   <Text><b>Valor do aluguel:</b> {rent.valor}</Text>
  //   <Text><b>Área do alojamento (em m2):</b> {rent.area}</Text>
  //   <Text><b>Mobilia:</b> {rent.mobilia}</Text>
  //   <Text><h3>restricoes:</h3></Text>
  //   <Text><b>Tipo de moradia:</b>{rent.restricoes.sexo}</Text>
  //   <Text><b>Tipo de alojamento/Quantidade de Pessoas: </b>{rent.restricoes.numero_pessoas}</Text>
  //   <Text><b>Tipo de banheiro: </b>{rent.restricoes.banheiro}</Text>
  //   <Text><b>Descricao áreas comuns: </b>{rent.descricao}</Text>
  //   <Text><b>Regras: </b>{rent.regras}</Text>
  //   <Button onPress={() => Linking.openURL(`mailto:${rent.email}`) }
  //           title="Enviar E-mail" />
  //   <Button onPress={() => Linking.openURL(mapUrl)}
  //           title="Abrir Mapa" />      
  // </View>  

    <View>
    <Text>{rent.nome}</Text>
    <Text>Quantidade de alojamentos: {rent.quantidade_quartos}</Text>
    <Text>Endereço: {rent.endereco}</Text>
    <Text>Valor do aluguel: {rent.valor}</Text>
    <Text>Área do alojamento (em m2): {rent.area}</Text>
    <Text>Mobilia: {rent.mobilia}</Text>
    <Text>restricoes:</Text>
    <Text>Tipo de moradia:{rent.restricoes.sexo}</Text>
    <Text>Tipo de alojamento/Quantidade de Pessoas: {rent.restricoes.numero_pessoas}</Text>
    <Text>Tipo de banheiro: {rent.restricoes.banheiro}</Text>
    <Text>Descricao áreas comuns: {rent.descricao}</Text>
    <Text>Regras: {rent.regras}</Text>
    <Button onPress={() => Linking.openURL(rent.video) }
            title="Assistir vídeo da casa" />
    <Button onPress={() => Linking.openURL(`mailto:${rent.email}`) }
            title="Enviar E-mail" />
    <Button onPress={() => Linking.openURL(mapUrl)}
            title="Abrir Mapa" /> 
    
    <Button onPress={() => WhatsApp("Oi, gato", rent.telefone)}
            title="Mandar Zap" />
      
     
  </View> 

);
}

const styles = StyleSheet.create({

});
