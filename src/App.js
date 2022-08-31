import React from 'react';
import {View, Text} from 'react-native';
import {viewStyles, textStyles} from './styles';
import {Header, Contents, Footer} from './components/Layout';
import ShadowBox from './components/ShadowBox';

const App = () => {
    return (
        <View style={viewStyles.container}>
            {/* styles.js
            <Text style={[textStyles, {color: 'green'}]}>Inline Styling - Text</Text>
            <Text style={[textStyles.text, textStyles.error]}>Inline Styling - Error</Text>
            */}
            {/* Layout.js
            <Header />
            <Contents />
            <Footer />
        */}
        <ShadowBox />
        </View>
    );
};

export default App;