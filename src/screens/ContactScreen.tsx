import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

/**
 * ContactScreen Component
 * Provides a contact form interface for users to send messages
 */
const ContactScreen = () => {
  // State management for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Handles the  contact form submission
   * TODO: Implement actual form submission logic
   */
  const handleSubmit = () => {
    // Implement contact form submission logic here
    console.log('Contact Form:', name, email, message);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Contact form title */}
      <Text style={styles.title}>Contact Us</Text>

      {/* Name input field */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Message input field */}
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      {/* Submit button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

/**
 * Component styles
 * Defines the layout and appearance of the contact form
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactScreen;