class App {
  run = async (name = "World") => {
    console.log(`Hello ${name}`);
  };
  //   constructor() {
  //     this.run = (name = 'World') => {
  //       console.log(`Hello ${name}`);
  //     };
  //   }
}

const app = new App();
app.run()
    .then(() => console.log('done'))
    .catch(err => console.log('Error'));
