import React from 'react';
import { Text, View, TouchableOpacity, Platform, Dimensions } from 'react-native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Inicio = () => {

    const [menu, setMenu] = React.useState(true);

    const Header = () => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: Platform.OS === 'ios' ? 50 : 15, backgroundColor: "#fff", paddingHorizontal: 20, paddingBottom: 15 }}>
                <Text style={{ fontSize: 26 }}>Riple</Text>
                <TouchableOpacity
                    onPress={() => setMenu(!menu)}>
                    {menu ? <AntDesign size={26} color="#000" name="close" /> : <FontAwesome5 size={26} color="#000" name="bars" />}
                </TouchableOpacity>
            </View>
        );
    };

    const Menu = () => {

        const Item = ({ title, icon, bottom }) => {
            return (
                <TouchableOpacity style={{ height: 'auto', borderWidth: 1, borderColor: "#eee", marginTop: bottom ? '170%' : null, display: 'flex', flexDirection: 'row', paddingVertical: 15, marginBottom: 10, borderRadius: 5, backgroundColor: "#fff", padding: 10, width: '100%', justifyContent: 'left', alignItems: 'center' }}>
                    <AntDesign size={20} color="#000" name={icon} />
                    <Text style={{ color: "#000", marginLeft: 5, fontSize: 18 }}>{title}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ display: 'flex', zIndex: 1, padding: 20, position: 'absolute', right: 0, height: Dimensions.get('window').height, width: '100%', backgroundColor: "#fff" }}>
                <Item title="Perfil" icon="user" />
                <Item title="Sair da sua conta" icon="logout" bottom />
            </View>
        );
    };

    return (
        <>
            <Header />
            {menu && (
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                    <Menu />
                </View>
            )}
            <ScrollView style={{ flex: 1, opacity: menu ? .5 : null, padding: 20, backgroundColor: "#fbfbfb" }}>
                <Text style={{ fontSize: 18, color: "#555" }}>Seja muito bem-vindo(a),</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Ricardo Domene</Text>
            </ScrollView>
        </>
    );
};

export default Inicio;