const fortunes = [

"A friend is a present you give yourself.",
"A gambler not only will lose what he has, but also will lose what he doesn’t have.",
"A golden egg of opportunity falls into your lap this month.",
"A good friendship is often more important than a passionate romance.",
"A good time to finish up old tasks.",

];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
         let randomIndex = Math.floor(Math.random() * fortunes.length);
         let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(fortunes);
      },
    
      addFortune: (req, res) => {
        let { fortune } = req.body;
        fortunes.push(fortune);
    
        res.status(200).send(fortunes);
      },
    
      deleteFortune: (req, res) => {
        let index = req.params.id;
    
        fortunes.splice(index, 1);
    
        res.status(200).send(fortunes);
      },
    
      editFortune: (req, res) => {
        let index = req.params.id;
        let { item } = req.body;
    
        fortunes.splice(index, 1, item);
    
        res.status(200).send(fortunes);
      },
    };
