import React from "react";
import { Appbar , Menu} from 'react-native-paper';
import { getHeaderTitle } from "@react-navigation/elements";

const CustomNavigationBar =({navigation,route, options,back} : any) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={() => navigation.goBack()} />: null}<Appbar.Content title={title} />
            {!back ?(
                <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                <Menu.Item
                    onPress={() => {
                        console.log('Item 1 pressed');
                    }}
                    title="Item 1"
                />  
                <Menu.Item
                    onPress={() => {
                        navigation.navigate('Detail')
                    }}
                    title="Detail"
                />  
                <Menu.Item
                    onPress={() => {
                        console.log('Item 3 pressed');
                    }}
                    title="Option 3"
                />  
            </Menu>
            ) : null}
        </Appbar.Header>
    );
}

export default CustomNavigationBar