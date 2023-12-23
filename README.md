# Virtual Pets
A tamagotchi web based Game. Where Players can adopt, train, battle, feed and play with their pets.
At this moment Players can create their user account, and adopt pet.

Made with Sveltekit Front end and golang backend.


## TODO 
- [x] Sign up
- [x] Log in
- [x] Auth (JWT)
	- [x] Generate Token
	- [ ] Check Token (make a function ) -> **BACK-END**
	- [ ] Refresh Token (update when moving through calls) -> **BACK-END**
- [x] Logout
- [ ] Made my own webgl 2d render api

Vivarium 
- [ ]  Vivarium page
	- [ ] Load pets from the user in a generic Vivarium
	- [ ] Load map and entities inside on Canvas
		- [ ] Event Animations
- [ ] Actions 
	- [ ] Train
	- [ ] Play ( just the function that grow happiness not the mini games)
	- [ ] Feed ( just as above)
		- [ ] Items and Inventory ( Type FOOD)
- [ ] Species - GET (CRUD) 
	- [ ] Differentiate baby form(adoptable) from non adoptable 
	- [x] Create Specie
	- [ ] Techniques
	- [x] Adopt Pet
		- [x] Create Pet from specie and link to owner
		- [x] Link pet to User

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
