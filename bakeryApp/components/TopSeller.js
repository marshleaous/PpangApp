import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import { themeColors } from '../theme';
import { urlFor } from '../sanity'; // Import the urlFor function from your sanity module

export default function TopSeller({ ordersWithDishes }) {
    console.log(ordersWithDishes);
    if (!ordersWithDishes || ordersWithDishes.length === 0) {
        return (
            <View>
                <Text>No orders found</Text>
            </View>
        );
    }

    // Count the occurrences of each dish
    const dishCounts = {};
    ordersWithDishes.forEach(order => {
        order.dishes.forEach(dish => {
            const { name, image } = dish.dish;
            if (!dishCounts[name]) {
                dishCounts[name] = { count: 1, image };
            } else {
                dishCounts[name].count++;
            }
        });
    });

    // Sort dishes by count in descending order
    const sortedDishes = Object.entries(dishCounts).sort(([, a], [, b]) => b.count - a.count);

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Top Seller</Text>
                    <Text style={{ color: themeColors.text, fontSize: 12 }}>most ordered items</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text, fontWeight: "bold" }}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                style={{ overflow: "visible", paddingTop: 5 }}
            >
                {sortedDishes.map(([name, { count, image }], index) => (
                    <TouchableWithoutFeedback key={index}>
                        <View
                            style={{
                                marginRight: 6,
                                backgroundColor: "#f0f0f0",
                                borderRadius: 20,
                                shadowColor: themeColors.bgColor(0.2),
                                shadowRadius: 7,
                                padding: 10,
                            }}
                        >
                            <View style={{ alignItems: "center" }}>
                                {/* Use urlFor function to generate image URL */}
                                <Image source={{ uri: urlFor(image.asset._ref).url() }} style={{ width: 100, height: 100, borderRadius: 20 }} />
                                <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 5 }}>{name}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "#888", fontWeight: "bold" }}>Ordered: {count}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    );
}
