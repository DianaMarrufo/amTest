import axios from 'axios'

const API_URL = 'https://slow-hill-lightyear.glitch.me/characters'

// Create new character
const createCharacter = async (characterData) => {
  const response = await axios.post(API_URL, characterData)
  return response.data
}

// Get characters
const getCharacters = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const characterService = {
  createCharacter,
  getCharacters,
}

export default characterService