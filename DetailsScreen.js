import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import axios from "axios";

const DetailsScreen = () => {
    const [products, setProducts] = useState([
        {
            id: "",
            name: "",
            type: "",
            weight: "",
            price: 10,
            numberCalories: 100,
            numberFats: 100,
            numberCarbohydrate: 100,
            numberProteins: 100,
            img: "",
        },
    ]);

    useEffect(()=> {
        axios.get("http://localhost:9000/product").then((response) => setProducts(response.data))
    }, [])

    const addProductToBasket = (id) => {
        axios.post("http://localhost:9000/basket/" + id, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }}).then()
    }

    const renderProduct = ({item}) => (
        <View style={styles.product}>
            <Image
                source={{
                    uri: item.img,
                }}
                style={{
                    width: 300,
                    height: 300,
                }}
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productInfo}>
                Калории: {item.numberCalories}
            </Text>
            <Text style={styles.productInfo}>
                Углеводы: {item.numberCarbohydrate}
            </Text>
            <Text style={styles.productInfo}>
                Жиры: {item.numberFats}
            </Text>
            <Text style={styles.productInfo}>
                Белки: {item.numberProteins}
            </Text>
            <Text style={styles.productPrice}>{item.price} USD</Text>
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText} onPress={() => addProductToBasket(item.id)}>Добавить в корзину</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Список продуктов</Text>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    product: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    productName: {
        fontSize: 18,
    },
    productInfo: {
        fontSize: 14,
    },
    productPrice: {
        fontSize: 16,
        color: "orange",
    },
    addToCartButton: {
        backgroundColor: "#8b00ff",
        padding: 10,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    addToCartButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default DetailsScreen;
