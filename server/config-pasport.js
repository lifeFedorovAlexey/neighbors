require('dotenv').config();
const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const User = require('./models/user');
const clientID = process.env.VK_CLIENT_ID;
const clientSecret = process.env.VK_SECRET;
const callbackURL = process.env.VK_CALLBACK_URL;

passport.serializeUser(function (user, done) {
  console.log('Сериализация: ', user.id);
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log('Десериализация: ', id);
  let user = await User.findOne({ id }).exec();
  if (user.isAdmin) {
    done(null, user);
  } else {
    done(null, false);
  }
});

passport.use(
  new VKontakteStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    async function myVerifyCallbackFn(
      accessToken,
      refreshToken,
      params,
      profile,
      done
    ) {
      let user = {};
      user.id = Number(profile.id);
      user.username = profile.username;
      user.familyName = profile.name.familyName;
      user.givenName = profile.name.givenName;
      user.profileUrl = profile.profileUrl;
      user.photo = profile.photos[0].value;
      await User.updateOne({ id: profile.id }, { $set: user }, { upsert: true })
        .then(() => {
          done(null, user);
        })
        .catch((err) => {
          done(null, false);
        });
    }
  )
);

module.exports = passport;
