/* Sample data for the puppy shop mockup. Replace with real data. */
window.BREEDS = [
  { id: 'labrador', name: 'Labrador Retriever', size: 'Large', energy: 5, grooming: 2, kids: 5, apartment: 2,
    sports: ['Swimming', 'Hiking', 'Canicross'], img: 'golden',
    text: 'Friendly, eager to please and happiest with a job to do. The ideal companion for swims, long hikes and fetch sessions.' },
  { id: 'border-collie', name: 'Border Collie', size: 'Medium', energy: 5, grooming: 3, kids: 4, apartment: 1,
    sports: ['Agility', 'Canicross', 'Trail running'], img: 'tricolor',
    text: 'The athlete of the dog world. Brilliant, tireless and needs both mental and physical exercise every day.' },
  { id: 'australian-shepherd', name: 'Australian Shepherd', size: 'Medium', energy: 5, grooming: 4, kids: 4, apartment: 2,
    sports: ['Agility', 'Hiking', 'Frisbee'], img: 'merle',
    text: 'Smart and loyal herder with stamina for all-day mountain outings. Loves learning new tricks.' },
  { id: 'beagle', name: 'Beagle', size: 'Small', energy: 4, grooming: 1, kids: 5, apartment: 4,
    sports: ['Walking', 'Scent work', 'Hiking'], img: 'tricolor',
    text: 'Merry, curious nose-on-legs. Great family dog that enjoys long walks and sniffing every trail.' },
  { id: 'poodle', name: 'Standard Poodle', size: 'Large', energy: 4, grooming: 5, kids: 4, apartment: 3,
    sports: ['Swimming', 'Obedience', 'Running'], img: 'cream',
    text: 'Elegant, very smart and low-shedding. A surprisingly sporty water dog under that curly coat.' },
  { id: 'cocker', name: 'Cocker Spaniel', size: 'Medium', energy: 4, grooming: 4, kids: 5, apartment: 3,
    sports: ['Walking', 'Swimming', 'Scent work'], img: 'brown',
    text: 'Gentle, affectionate and always wagging. Happy on a countryside walk or curled up after a swim.' }
];

window.PUPPIES = [
  { id: 'max',    name: 'Max',    breed: 'labrador',            sex: 'Male',   ageWeeks: 10, color: 'Golden',       img: 'golden',   price: 1200, status: 'available', badge: 'New' },
  { id: 'luna',   name: 'Luna',   breed: 'labrador',            sex: 'Female', ageWeeks: 11, color: 'Black',        img: 'black',    price: 1250, status: 'available' },
  { id: 'scout',  name: 'Scout',  breed: 'border-collie',       sex: 'Male',   ageWeeks: 9,  color: 'Tricolour',    img: 'tricolor', price: 1100, status: 'available', badge: 'Agility line' },
  { id: 'nala',   name: 'Nala',   breed: 'border-collie',       sex: 'Female', ageWeeks: 12, color: 'Black & white',img: 'black',    price: 1100, status: 'reserved' },
  { id: 'sky',    name: 'Sky',    breed: 'australian-shepherd', sex: 'Female', ageWeeks: 10, color: 'Blue merle',   img: 'merle',    price: 1400, status: 'available', badge: 'New' },
  { id: 'rocky',  name: 'Rocky',  breed: 'australian-shepherd', sex: 'Male',   ageWeeks: 13, color: 'Red tri',      img: 'brown',    price: 1350, status: 'available' },
  { id: 'daisy',  name: 'Daisy',  breed: 'beagle',              sex: 'Female', ageWeeks: 9,  color: 'Tricolour',    img: 'tricolor', price: 950,  status: 'available' },
  { id: 'milo',   name: 'Milo',   breed: 'beagle',              sex: 'Male',   ageWeeks: 11, color: 'Lemon',        img: 'cream',    price: 950,  status: 'available' },
  { id: 'coco',   name: 'Coco',   breed: 'poodle',              sex: 'Female', ageWeeks: 10, color: 'Cream',        img: 'cream',    price: 1600, status: 'available', badge: 'Low-shedding' },
  { id: 'oscar',  name: 'Oscar',  breed: 'poodle',              sex: 'Male',   ageWeeks: 12, color: 'Black',        img: 'black',    price: 1550, status: 'reserved' },
  { id: 'rosie',  name: 'Rosie',  breed: 'cocker',              sex: 'Female', ageWeeks: 10, color: 'Chocolate',    img: 'brown',    price: 1150, status: 'available' },
  { id: 'teddy',  name: 'Teddy',  breed: 'cocker',              sex: 'Male',   ageWeeks: 9,  color: 'Golden',       img: 'golden',   price: 1150, status: 'available', badge: 'New' }
];

window.GEAR = [
  { id: 'starter-kit', name: 'Puppy starter kit',            cat: 'Kits',     price: 49.99, rating: 4.8, count: 412, tag: 'decorative_jade',     desc: 'Collar, leash, two bowls, a chew toy and waste bags.' },
  { id: 'harness',     name: 'Adjustable puppy harness',      cat: 'Walking',  price: 14.99, rating: 4.6, count: 980, tag: 'decorative_cobalt',   desc: 'Padded, reflective, grows with your puppy.' },
  { id: 'leash',       name: 'Reflective leash 2 m',          cat: 'Walking',  price: 9.99,  rating: 4.7, count: 1320, tag: 'decorative_cobalt',  desc: 'Soft-grip handle and reflective stitching.' },
  { id: 'canicross',   name: 'Canicross belt + bungee line',  cat: 'Running',  price: 34.99, rating: 4.5, count: 288, tag: 'decorative_saffron',  desc: 'For running together once your dog is fully grown.' },
  { id: 'bed',         name: 'Washable dog bed M',            cat: 'Home',     price: 39.99, rating: 4.6, count: 704, tag: 'decorative_gravel',   desc: 'Removable cover, machine washable at 30°C.' },
  { id: 'bowl',        name: 'Collapsible travel bowl',       cat: 'Outdoor',  price: 6.99,  rating: 4.8, count: 2105, tag: 'decorative_brick',   desc: 'Folds flat into any backpack pocket.' },
  { id: 'coat',        name: 'Waterproof dog coat',           cat: 'Outdoor',  price: 24.99, rating: 4.4, count: 356, tag: 'decorative_brick',    desc: 'Keeps your pup dry on rainy hikes.' },
  { id: 'ball',        name: 'Floating fetch ball, pack of 3',cat: 'Play',     price: 7.99,  rating: 4.7, count: 1588, tag: 'decorative_amethyst', desc: 'Bright colours, floats in lakes and the sea.' }
];

window.breedById = (id) => window.BREEDS.find((b) => b.id === id);
window.puppyById = (id) => window.PUPPIES.find((p) => p.id === id);
window.gearById = (id) => window.GEAR.find((g) => g.id === id);
window.euro = (n) => n.toFixed(2).replace('.', ',') + ' €';
window.DEPOSIT = 200;
