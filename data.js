const items = [
  {
    id: 1,
    name: "フシギダネ",
    image: "images/fushigidane.jpg",
    description: "種ポケモン。草と毒タイプを持つ。",
    type: "くさ / どく",
    evolvesTo: 2
  },
  {
    id: 2,
    name: "フシギソウ",
    image: "images/fushigisou.jpg",
    description: "フシギダネの進化形。体が大きくなり、花が育ってきた。",
    type: "くさ / どく",
    evolvesTo: 3
  },
  {
    id: 3,
    name: "フシギバナ",
    image: "images/fushigibana.jpg",
    description: "最終進化形。花が大きく咲き誇る。",
    type: "くさ / どく",
    evolvesTo: null
  },
  {
    id: 4,
    name: "ヒトカゲ",
    image: "images/hitokage.jpg",
    description: "トカゲポケモン。炎タイプ。",
    type: "ほのお",
    evolvesTo: 5
  },
  {
    id: 5,
    name: "リザード",
    image: "images/lizard.jpg",
    description: "ヒトカゲの進化形。火力が増した。",
    type: "ほのお",
    evolvesTo: 6
  },
  {
    id: 6,
    name: "リザードン",
    image: "images/lizardon.jpg",
    description: "最終進化形。強力な炎を操る。",
    type: "ほのお / ひこう",
    evolvesTo: null
  },
  {
    id: 7,
    name: "まめっち",
    image: "images/mamecchi.jpg",
    description: "勉強もスポーツも大好きで、何事にも一生懸命なたまごっち。<br>趣味は発明だけど、ときどき失敗することも…。絵はあまり得意じゃないみたい！？",
    type: "まめ属",
    evolvesTo: null
  },
];

const evoHtml = item.evolvesTo
  ? `<p>→ <a href="detail.html?id=${item.evolvesTo}">進化する</a></p>`
  : `<p>最終進化形です</p>`;

document.getElementById('evolution').innerHTML = evoHtml;

