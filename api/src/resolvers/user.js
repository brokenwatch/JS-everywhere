module.exports = {
  notes: async (user, args, { models }) => {
    console.log(user);
    return await models.Note.find({ author: user._id }).sort({ _id: -1 });
  },
  favorites: async (user, args, { models }) => {
    return models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 });
  }
};
