import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import axios from "axios";

const ShoppingScreen = () => {
    const [basket, setBasket] = useState(
        {
            id: "1",
            price: 10,
            numberCalories: 100,
            numberFats: 100,
            numberCarbohydrate: 100,
            numberProteins: 100,
            products: [{
                id: "1",
                name: "",
                type: "",
                weight: "",
                price: 10,
                numberCalories: 100,
                numberFats: 100,
                numberCarbohydrate: 100,
                numberProteins: 100,
                img: ""
            }]
        });

    useEffect(() => {
        axios.get("http://localhost:9000/basket", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => setBasket(response.data))
    }, [])

    const deleteProduct = (id) => {
        axios.delete("http://localhost:9000/basket/" + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then()
    }

    const addOrder = () => {
        alert("Заказ оформлен")
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
                <Text style={styles.addToCartButtonText} onPress={() => deleteProduct(item.id)}>Удалить из корзины </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Корзина</Text>
            <FlatList
                data={basket.products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Суммарная цена:</Text>
                <Text style={styles.subtotalAmount}>{basket.price} BYN</Text>
            </View>
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Количество калорий:</Text>
                <Text style={styles.subtotalAmount}>{basket.numberCalories} ккал</Text>
            </View>
            <TouchableOpacity style={styles.addOrderButton}>
                <Text style={styles.addToCartButtonText} onPress={addOrder}>Заказать</Text>
            </TouchableOpacity>
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
    cartItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    itemName: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 16,
        color: "green",
        marginBottom: 10,
    },
    itemQuantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemQuantityButton: {
        backgroundColor: "#ccc",
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
    },
    itemQuantityButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    itemQuantity: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        marginLeft: 10,
    },
    removeItemButton: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    removeItemButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
    },
    subtotalText: {
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 10,
    },
    subtotalAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "orange",
    },
    addToCartButton: {
        backgroundColor: "black",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    addOrderButton: {
        backgroundColor: "#8b00ff",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignSelf: "center",
    },
    addToCartButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ShoppingScreen;
