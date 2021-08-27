import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/styles'

export const BotonCalc = ({texto,ancho = false, color = '#2D2D2D',accion}) => {

    
    return (

        <TouchableOpacity style={{
            ...styles.boton,
            backgroundColor:color,
            width: ancho ? 180 : 80
        }}
        onPress={()=>accion(texto)}
        >
            <Text style={{...styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white'
            }}>{texto}</Text>
        </TouchableOpacity>
    )
}
