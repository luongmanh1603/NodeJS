const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "River need springs,",
    "Do not fear what you don't know.",
    'you will have a pleasant surprise.',
    "Whenever possile, keep it simple.",
]
 exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
 }