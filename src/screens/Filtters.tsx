import { Box, Button, ButtonText, HStack, Image, SafeAreaView, ScrollView, Text, VStack, View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { ChevronDown, CircleMinus, CirclePlus, MapPin, X } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated";
import Slider from "@react-native-community/slider";

// @ts-ignore
import DatePicker from "react-native-modern-datepicker";


const AnimateTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const guestsGroups = [
    {
        name: 'Adults',
        text: 'Ages 13 or above',
        count: 0,
    },
    {
        name: 'Children',
        text: 'Ages 2 - 12',
        count: 0,
    },
    {
        name: 'Infants',
        text: 'Under 2',
        count: 0,
    },
]

const Filtters = () => {
    const navigation = useNavigation();
    const [openCard, setOpenCard] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState(0);
    const today = new Date().toISOString().substring(0, 10);
    const [groups, setGroups] = useState(guestsGroups);
    const [selectedHour, setSelectedHour] = useState(0);
    const MIN = 200;
    const MAX = 12000;

    const [ values, setValues] = useState([MIN, MAX]);

    const onClearAll = () => {
        setSelectedPlace(0);
        setOpenCard(0);
    };

    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);
    const [isPressed3, setIsPressed3] = useState(false);
    const [isPressed4, setIsPressed4] = useState(false);
    const [isPressed5, setIsPressed5] = useState(false);
    const [isPressed6, setIsPressed6] = useState(false);
    const [isPressed7, setIsPressed7] = useState(false);
    const [isPressed8, setIsPressed8] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    const handlePress2 = () => {
        setIsPressed2(!isPressed2);
    };
    const handlePress3 = () => {
        setIsPressed3(!isPressed3);
    };
    const handlePress4 = () => {
        setIsPressed4(!isPressed4);
    };
    const handlePress5 = () => {
        setIsPressed5(!isPressed5);
    };
    const handlePress6 = () => {
        setIsPressed6(!isPressed6);
    };
    const handlePress7 = () => {
        setIsPressed7(!isPressed7);
    };
    const handlePress8 = () => {
        setIsPressed8(!isPressed8);
    };

    useEffect(() => {
        navigation.setOptions({
            presentation: 'transparentModal',
            animation: 'fade',
            headerTransparent: true,
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTitle: "Filtters",
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Box alignItems="center" borderRadius={10} justifyContent="center">
                        <X color="rgba(64, 64, 64, 1)" size={24} />
                    </Box>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <BlurView intensity={70} style={{ flex: 1 }}>
            <SafeAreaView flex={1}>
                <ScrollView>
                    {/* Location */}
                    <Box mx={16} my={16} >
                        <Text fontSize={18} fontWeight="$semibold" color="black">Location</Text>
                        <TouchableOpacity>
                            <Box flexDirection="row" mt={10} alignItems="center">
                                <MapPin color="#BFA27E" />
                                <Text pl={3} fontSize={16}>Location DataBase • City</Text>
                                <ChevronDown color="#404040" style={{ right: 0, position: "absolute" }} />
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    {/* Facilities */}
                    <View mt={0} style={styles.card}>
                        {openCard != 1 && (
                            <AnimateTouchableOpacity onPress={() => setOpenCard(1)} style={styles.cardPreview}
                                entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                                <Text style={styles.previewText}>Facilities</Text>
                                <Text style={styles.previewDate}>Add facilities</Text>
                            </AnimateTouchableOpacity>
                        )}

                        {openCard === 1 && (
                            <>
                                <Animated.Text style={styles.cardHeader} entering={FadeIn}> Facilities </Animated.Text>
                                <Animated.View style={styles.cardBody}>
                                    <ScrollView horizontal={true}>
                                        <VStack>
                                            <HStack justifyContent='space-between'>
                                                <TouchableOpacity onPress={handlePress} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed ? require("../../assets/PoolW.png") : require("../../assets/Pool.png")} />
                                                        <Text h={20} color={isPressed ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Pool</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress2} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed2 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed2 ? require("../../assets/SofaW.png") : require("../../assets/Sofa.png")} />
                                                        <Text h={20} color={isPressed2 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Furniture</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress3} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed3 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed3 ? require("../../assets/BathtubW.png") : require("../../assets/Bathtub.png")} />
                                                        <Text h={20} color={isPressed3 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Bathroom</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress4} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed4 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed4 ? require("../../assets/WeberW.png") : require("../../assets/Weber.png")} />
                                                        <Text h={20} color={isPressed4 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Weber</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                            </HStack>

                                            <HStack mt={7} justifyContent='space-between'>
                                                <TouchableOpacity onPress={handlePress5} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed5 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed5 ? require("../../assets/PoolW.png") : require("../../assets/Pool.png")} />
                                                        <Text h={20} color={isPressed5 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Pool</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress6} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed6 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed6 ? require("../../assets/SofaW.png") : require("../../assets/Sofa.png")} />
                                                        <Text h={20} color={isPressed6 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Furniture</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress7} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed7 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed7 ? require("../../assets/BathtubW.png") : require("../../assets/Bathtub.png")} />
                                                        <Text h={20} color={isPressed7 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Bathroom</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handlePress8} style={{ paddingRight: 15 }}>
                                                    <Box w={70} h={60} alignItems='center' bgColor={isPressed8 ? '#BFA27E' : 'white'} borderRadius={5} borderWidth={1} borderColor="#BFA27E">
                                                        <Image marginTop={0} w={40} h={40} source={isPressed8 ? require("../../assets/WeberW.png") : require("../../assets/Weber.png")} />
                                                        <Text h={20} color={isPressed8 ? 'white' : '#BFA27E'} fontSize={13} fontWeight='$semibold'>Weber</Text>
                                                    </Box>
                                                </TouchableOpacity>
                                            </HStack>
                                        </VStack>
                                    </ScrollView>
                                </Animated.View>
                                <Animated.View style={styles.cardFooter}>
                                    <Box style={styles.buttonRemoveCard}>
                                        <Button variant="link">
                                            <ButtonText fontSize={14} color="black">Remove facilities</ButtonText>
                                        </Button>
                                    </Box>
                                    <TouchableOpacity style={styles.buttonConfirmCard}>
                                        <Text fontSize={14} color="white" fontWeight="$bold">Confirm facilities</Text>
                                    </TouchableOpacity>
                                </Animated.View>

                            </>
                        )}
                    </View>

                    {/* Calendar */}
                    <View mt={0} style={styles.card}>
                        {openCard != 2 && (
                            <AnimateTouchableOpacity onPress={() => setOpenCard(2)} style={styles.cardPreview}
                                entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                                <Text style={styles.previewText}>Dates</Text>
                                <Text style={styles.previewDate}>Add dates</Text>
                            </AnimateTouchableOpacity>
                        )}
                        {openCard === 2 && (
                            <>
                                <Animated.Text style={styles.cardHeader} entering={FadeIn}> What dates would you like? </Animated.Text>

                                <Animated.View style={styles.cardBody}>
                                    <DatePicker current={today} selected={today} mode={'Calendar'}
                                        options={{ borderColor: 'transparent', mainColor: "#BFA27E", }} />
                                </Animated.View>

                                <Animated.View style={styles.cardFooter} >
                                    <Box style={styles.buttonRemoveCard}>
                                        <Button variant="link">
                                            <ButtonText fontSize={14} color="black">Remove date</ButtonText>
                                        </Button>
                                    </Box>
                                    <TouchableOpacity style={styles.buttonConfirmCard}>
                                        <Text fontSize={14} color="white" fontWeight="$bold">Confirm date</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </>
                        )}
                    </View>

                    {/* Price Range */}
                    <View mt={0} style={styles.card}>
                        {openCard != 3 && (
                            <AnimateTouchableOpacity onPress={() => setOpenCard(3)} style={styles.cardPreview}
                                entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                                <Text style={styles.previewText}>Price range</Text>
                                <Text style={styles.previewDate}>Add price</Text>
                            </AnimateTouchableOpacity>
                        )}
                        {openCard === 3 && (
                            <>
                                <Animated.Text style={styles.cardHeader} entering={FadeIn}> Price range (for night) </Animated.Text>

                                <Animated.View style={styles.cardBody}>
                                    <Text color="#BFA27E">${values[0]} - ${values[1]}</Text>
                                    <Text>Current Range: ${values[1] - values[0]}</Text>
                                    <Slider style={{ width: 200, height: 200 }}
                                            minimumValue={MIN}
                                            maximumValue={MAX}
                                            minimumTrackTintColor="#BFA27E"
                                            maximumTrackTintColor="#000000"
                                            thumbTintColor="#BFA27E"
                                            step={1}
                                            onValueChange={(value: number) => setValues(value)}>
                                                
                                            </Slider>
                                </Animated.View>

                                <Animated.View style={styles.cardFooter} >
                                    <Box style={styles.buttonRemoveCard}>
                                        <Button variant="link">
                                            <ButtonText fontSize={14} color="black">Remove price</ButtonText>
                                        </Button>
                                    </Box>
                                    <TouchableOpacity style={styles.buttonConfirmCard}>
                                        <Text fontSize={14} color="white" fontWeight="$bold">Confirm price</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </>
                        )}
                    </View>

                    {/* Schedule */}
                    <View mt={0} style={styles.card}>
                        {openCard != 4 && (
                            <AnimateTouchableOpacity onPress={() => setOpenCard(4)} style={styles.cardPreview}
                                entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                                <Text style={styles.previewText}>Schedule</Text>
                                <Text style={styles.previewDate}>Add schedule</Text>
                            </AnimateTouchableOpacity>
                        )}
                        {openCard === 4 && (
                            <>
                                <Animated.Text style={styles.cardHeader} entering={FadeIn}> What schedule would you like? </Animated.Text>

                                <Animated.View style={styles.cardBody}>
                                    <View alignItems="center" justifyContent="center">
                                        <Slider
                                            style={{ width: 200, height: 200 }}
                                            minimumValue={0}
                                            maximumValue={24}
                                            minimumTrackTintColor="#BFA27E"
                                            maximumTrackTintColor="#000000"
                                            thumbTintColor="#BFA27E"
                                            step={1}
                                            // Aquí añades el valor y la función para manejar el cambio
                                            onValueChange={(value: number) => setSelectedHour(MIN, MAX)}
                                        />
                                        <Text>{selectedHour} hours</Text>
                                    </View>
                                </Animated.View>

                                <Animated.View style={styles.cardFooter} >
                                    <Box style={styles.buttonRemoveCard}>
                                        <Button variant="link">
                                            <ButtonText fontSize={14} color="black">Remove schedule</ButtonText>
                                        </Button>
                                    </Box>
                                    <TouchableOpacity style={styles.buttonConfirmCard}>
                                        <Text fontSize={13} color="white" fontWeight="$bold">Confirm schedule</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </>
                        )}
                    </View>

                    {/* Guest */}
                    <View mt={0} style={styles.card}>
                        {openCard != 5 && (
                            <AnimateTouchableOpacity onPress={() => setOpenCard(5)} style={styles.cardPreview}
                                entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
                                <Text style={styles.previewText}>Guest</Text>
                                <Text style={styles.previewDate}>Add Guest</Text>
                            </AnimateTouchableOpacity>
                        )}
                        {openCard === 5 && (
                            <>
                                <Animated.Text style={styles.cardHeader} entering={FadeIn}> Who is coming? </Animated.Text>

                                <Animated.View style={styles.cardBody}>
                                    {groups.map((item, index) => (
                                        <View key={index} style={[styles.guestItem, index + 1 > guestsGroups.length ? styles.itemBorder : null,

                                        ]}>
                                            <View>
                                                <Text style={{ fontSize: 16, color: "black" }}>{item.name}</Text>
                                                <Text style={{ fontSize: 15, color: "grey" }}>{item.text}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', gap: 10, alignItems: "center", justifyContent: "center" }}>
                                                <TouchableOpacity onPress={() => {
                                                    const newGroups = [...groups];
                                                    newGroups[index].count = newGroups[index].count > 0 ? newGroups[index].count - 1 : 0;
                                                    setGroups(newGroups);
                                                }}>
                                                    <CircleMinus size={30} color={groups[index].count > 0 ? "gray" : "#cdcdcd"} />
                                                </TouchableOpacity>
                                                <Text fontSize={16} textAlign="center">{item.count}</Text>
                                                <TouchableOpacity onPress={() => {
                                                    const newGroups = [...groups];
                                                    newGroups[index].count++,
                                                        setGroups(newGroups);
                                                }}>
                                                    <CirclePlus size={30} color={"gray"}></CirclePlus>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}
                                </Animated.View>

                                <Animated.View style={styles.cardFooter} >
                                    <Box style={styles.buttonRemoveCard}>
                                        <Button variant="link">
                                            <ButtonText fontSize={14} color="black">Remove guest</ButtonText>
                                        </Button>
                                    </Box>
                                    <TouchableOpacity style={styles.buttonConfirmCard}>
                                        <Text fontSize={14} color="white" fontWeight="$bold">Confirm guest</Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                    <TouchableOpacity onPress={onClearAll} style={{ left: -5 }}>
                        <Text fontSize={18} textDecorationLine="underline" color="black">Remove filters</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack} style={{ backgroundColor: "#BFA27E", borderRadius: 24, paddingHorizontal: 24, paddingVertical: 14, right: -28 }} >
                    <Text fontSize={18} color="white" fontWeight="$semibold"> Confirm filters</Text>
                </TouchableOpacity>

            </Animated.View>
        </BlurView>

    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 42,
        paddingHorizontal: 46,
        paddingTop: 25,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 1,
        borderColor: "#cdcdcd",
        backgroundColor: "white"
    },
    previewText: {
        color: "grey",
        fontSize: 15,
    },
    previewDate: {
        fontSize: 15,
        color: "black",
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        margin: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        gap: 20,
    },
    cardPreview: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        padding: 16,
    },
    cardBody: {
        marginTop: -16,
        margin: 16,
    },
    cardFooter: {
        flexDirection: "row",
        marginTop: -16,
        padding: 30,
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 2,
        borderColor: "#EFEFEF",
    },
    buttonRemoveCard: {
        width: 167,
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        left: 16,
    },
    buttonConfirmCard: {
        width: 159,
        right: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
        position: "absolute",
        backgroundColor: "#BFA27E",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    guestItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 6,
    },
    itemBorder: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "grey",
    },

});

export default Filtters;