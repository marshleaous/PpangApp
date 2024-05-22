import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'

export function AdminMenu() {
  return (
    <View className="mt-4 pl-4">
      <ScrollView 
      horizontal
      showsVerticalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingBottom: 15
      }}
      >
        <View className="flex justify-center items-center mr-6">
            <TouchableOpacity
               
               className={"p-1 rounded-full shadow bg-gray-200"}>
                <Image style={{width: 45, height: 45}} source={require('../assets/images/pizza.png')} />
            </TouchableOpacity>
            <Text className={"text-sm"}>Orders</Text>
        </View>
        <View className="flex justify-center items-center mr-6">
            <TouchableOpacity
               
               className={"p-1 rounded-full shadow bg-gray-200"}>
                <Image style={{width: 45, height: 45}} source={require('../assets/images/pizza.png')} />
            </TouchableOpacity>
            <Text className={"text-sm"}>Items</Text>
        </View>
        <View className="flex justify-center items-center mr-6">
            <TouchableOpacity
               
               className={"p-1 rounded-full shadow bg-gray-200"}>
                <Image style={{width: 45, height: 45}} source={require('../assets/images/pizza.png')} />
            </TouchableOpacity>
            <Text className={"text-sm"}>Users</Text>
        </View>
        <View className="flex justify-center items-center mr-6">
            <TouchableOpacity
               
               className={"p-1 rounded-full shadow bg-gray-200"}>
                <Image style={{width: 45, height: 45}} source={require('../assets/images/pizza.png')} />
            </TouchableOpacity>
            <Text className={"text-sm"}>Orders</Text>
        </View>
      </ScrollView>
    </View>
  )
}