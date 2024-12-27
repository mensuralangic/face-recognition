const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password } = req.body;
    if(!email || !name || !password) {
       return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
          password: hash,
          email: email,
          name: name,
        })
        .into("users")
        .returning(["id", "email", "name", "password", "entries"])  // Add all columns you want to return
        .then(data => res.json(data[0]))
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch((err) => res.status(400).json("unable to register"));
  };

  module.exports = {
    handleRegister: handleRegister
  };

  