
const chatModel = require('../Models/chatModel')
// console.log(chatModel)
//create Chat
const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chat = await chatModel.findOne({ members: { $all: [firstId, secondId] } })
        if (chat) return res.status(200).json(chat)

        const newChat = new chatModel({
            member: [firstId, secondId]
        })

        const response = await newChat.save()
        res.status(200).json(response)
    }
    catch (error) {
        console.log('Error')
        res.status(500).json(error)
    }
}
//getUser Chats

const findUserChats = async (req, res) => {
    const userId = req.params.userId;
    try {
        const chats = await chatModel.find({ member: { $in: [userId] } })
        res.status(200).json(chats)

    }
    catch (error) {
        console.log('Error')
        res.status(500).json(error)
    }
}

//FindChat

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await chatModel.findOne({ member: { $all: [firstId, secondId] } })
        res.status(200).json(chat)
    }
    catch (error) {
        console.log('Error')
        res.status(500).json(error)
    }
}

module.exports = {
    createChat, findUserChats, findChat
}