
import {View,FlatList} from 'react-native'
import { bebidas } from '../data/arrayBebidas'
import BebidaCard from '../components/bebidaCard'


export default function Bebidas() {
    return(
        <View 
        style={{flex:1,paddingTop:16,backgroundColor:"#d2cfcf"}}>
            <FlatList
            data={bebidas}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>
               ( 
               <BebidaCard produto={item}/>
            ) }
                    />
        </View>
    )}

