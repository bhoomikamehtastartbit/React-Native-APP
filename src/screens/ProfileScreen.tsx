import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{userInfo.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userInfo.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{userInfo.phone}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  infoItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;