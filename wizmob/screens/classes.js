import React from 'react';
import { View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Classes() {
    
    {/* 
        Figure out a sensible way to navigate the user here,
        also fill in the class-descriptions 
    */}
    
    return (
        <View>
            <Swiper
                loop={false}
                showsPagination={false}
                index={1}
                >
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Barbarian</Text>
                    <Image source="images/classes/wizardify_barbarian.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Bard</Text>
                    <Image source="images/classes/wizardify_bard.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Cleric</Text>
                    <Image source="images/classes/wizardify_cleric.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Druid</Text>
                    <Image source="images/classes/wizardify_druid.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Fighter</Text>
                    <Image source="images/classes/wizardify_fighter.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Monk</Text>
                    <Image source="images/classes/wizardify_monk.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Paladin</Text>
                    <Image source="images/classes/wizardify_paladin.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Ranger</Text>
                    <Image source="images/classes/wizardify_ranger.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Rogue</Text>
                    <Image source="images/classes/wizardify_rogue.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Sorcerer</Text>
                    <Image source="images/classes/wizardify_sorcerer.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Warlock</Text>
                    <Image source="images/classes/wizardify_warlock.png" />
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.text}>Wizard</Text>
                    <Image source="images/classes/wizardify_wizard.png" />
                </View>              
            </Swiper>
        </View>
    );
}