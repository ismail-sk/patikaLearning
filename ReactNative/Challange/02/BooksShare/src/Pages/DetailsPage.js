import { View, Text, Image, Linking, ScrollView } from 'react-native'
import React from 'react';

import { styles } from "../styles/DetailsPage.styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* 
şu anda resimler parametre ne olursa olsun statik olarak duruyor.
wikipedia dan kitap hakkında özet bilgi çekilecek API araştırılacak, şu anda görünenler statik veri.




API NOTES
https://stackoverflow.com/questions/8555320/is-there-a-wikipedia-api-just-for-retrieve-the-content-summary
https://www.mediawiki.org/wiki/API:Main_page
https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page

https://en.wikipedia.org/w/api.php?action=help&modules=query%2Bextracts

https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Pet_door&rvslots=*&rvprop=content&formatversion=2


görsel sorun detayı şu:
dinamik lokal resim çekme sorununa çözümler alternatifler aranacak
(online a yüklenebilir, DB devreye alındıkdan sonra odaklanılacak)

../assest/images/the-man-without-qualities.jpg
const theDir ='../assest/';
 console.log(item)
 let imag = theDir + item.imageLink;
 console.log(imag,typeof(theDir + item.imageLink), typeof(`${theDir}${item.imageLink}`)) 
 <Image source={require(`../assest/images/the-man-without-qualities.jpg`)} />
 */
const DetailsPage = (props) => {
  let item=props.route.params.theparam;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <ScrollView style={styles.container}>
        <View  style={styles.row}>

          <Text style={styles.infoText}>Yazar:{'\n'}
            <Text style={styles.dataText}>{item.author}</Text>
          </Text>

          <Text style={styles.infoText}>Ülke:{'\n'}
            <Text style={styles.dataText}>{item.country}</Text>
          </Text>

        </View>
      
        <View style={styles.row}>

          <Text style={styles.infoText}>Yıl:{'\n'}
            <Text style={styles.dataText}>{item.year}</Text>
          </Text>

          <Text style={styles.infoText}>Dil:{'\n'}
            <Text style={styles.dataText}>{item.language}</Text>
          </Text>

          <Text style={styles.infoText}>Sayfa:{'\n'}
            <Text style={styles.dataText}>{item.pages}</Text>
          </Text>

        </View>
        
 <Image source={require(`../assest/images/the-man-without-qualities.jpg`)}
  style={{ width: 200, height: 200 }} />
 
          <Text>Bustan {'\n'}The Bustan (Persian: بوستان, also transliterated as Būstān, Bustān; \"the orchard\") is a book of poetry by the Persian poet Saadi, completed in 1257 CE and dedicated to the Salghurid Atabeg Sa'd I or Sa'd II. Bustan is considered one of two major works of Saadi.\nIt was Saadi's first work. The book contains the fruits of Saadi's long experience and his judgements upon life, and is illustrated by a vast collection of anecdotes. It includes accounts of Saadi's travels and his analysis of human psychology. He often mentions his accounts with fervour and advice similar to Aesop's fables. The book has ten chapters regarding the issues of ethics and training; namely, justice, mercy, love, humility, contentment, devotions, education, gratitude, repentance, and praying.This book is one of the 100 greatest books of all time according to Bokklubben World Library. It is composed in mathnawī style (rhyming couplets), and has been translated into English. The Bustan was translated into Dutch in 1688 by Daniel Havart.In India, Bustan and Gulistan were taught to schoolboys in maktabs, and it had to be learnt by heart.{'\n'}</Text>
          <Text>Hamlet{'\n'}The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words. Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.\nHamlet is considered among the most powerful and influential works of world literature, with a story capable of \"seemingly endless retelling and adaptation by others\". It was one of Shakespeare's most popular works during his lifetime and still ranks among his most performed, topping the performance list of the Royal Shakespeare Company and its predecessors in Stratford-upon-Avon since 1879. It has inspired many other writers—from Johann Wolfgang von Goethe and Charles Dickens to James Joyce and Iris Murdoch—and has been described as \"the world's most filmed story after Cinderella\".The story of Shakespeare's Hamlet was derived from the legend of Amleth, preserved by 13th-century chronicler Saxo Grammaticus in his Gesta Danorum,
          as subsequently retold by the 16th-century scholar François de Belleforest. Shakespeare may also have drawn on an earlier Elizabethan play known today as the Ur-Hamlet, though some scholars believe Shakespeare wrote the Ur-Hamlet, later revising it to create the version of Hamlet that exists today. He almost certainly wrote his version of the title role for his fellow actor, Richard Burbage, the leading tragedian of Shakespeare's time. In the 400 years since its inception, the role has been performed by numerous highly acclaimed actors in each successive century.\nThree different early versions of the play are extant: the First Quarto (Q1, 1603); the Second Quarto (Q2, 1604); and the First Folio (F1, 1623). Each version includes lines and entire scenes missing from the others. The play's structure and depth of characterisation have inspired much critical scrutiny. One such example is the centuries-old debate about Hamlet's hesitation to kill his uncle, which some see as merely a plot device to prolong the action but which others argue is a dramatisation of the complex philosophical and ethical issues that surround cold-blooded murder, calculated revenge, and thwarted desire. More recently, psychoanalytic critics have examined Hamlet's unconscious desires, while feminist critics have re-evaluated and attempted to rehabilitate the often-maligned characters of Ophelia and Gertrude.</Text>
           
        <Text style={styles.buttonSet} onPress={() => Linking.openURL(item.link)}>
          <MaterialCommunityIcons name="wikipedia" size={25}/>
           Wikipedia'dan daha fazla bilgi al </Text>
            </ScrollView>
                
        <View style={[styles.row]}>

          <Text onPress={() => props.navigation.navigate("LookUpProfilePage")}
              style={styles.infoText}>
                Paylaşan:{'\n'}
                <Text style={styles.dataText}>{item.sharedBy}</Text>
                {'\n'}Profil'i gör</Text>

          <Text style={styles.infoText}>

            X Favori{'\n'} 
            <MaterialIcons name="favorite-border" size={20} />
            {'\n'} ekle

          </Text>
          
          <Text style={styles.infoText}>
            
          {item.likes} Beğeni{'\n'}
          <AntDesign name="like2" size={20} /* color={focused ? 'blue' : 'gray'} */ />
          {'\n'}Beğen
          
          </Text>
        </View>
    </View>
  )
}

export default DetailsPage