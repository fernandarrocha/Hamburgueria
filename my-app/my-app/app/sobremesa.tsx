
import {View,FlatList} from 'react-native'
import { sobremesas } from '@/data/arraySobremesas'
import SobremesaCard from '@/components/sobremesaCard'


export default function Sobremesa() {
    return(
        <View 
        style={{flex:1,paddingTop:16,backgroundColor:"#d2cfcf"}}>
            <FlatList
            data={sobremesas}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>
               ( 
               <SobremesaCard produto={item}/>
            ) }
                    />
        </View>
    )}

