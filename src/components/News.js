import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "Shafique hits Mujeeb for six and four as Pakistan reach 50",
          "description": "Abdullah Shafique hits Mujeeb Ur Rahman for a six and four from consecutive balls as Pakistan reach 50 against Afghanistan during their Cricket World Cup game in Chennai.",
          "url": "http://www.bbc.co.uk/sport/av/cricket/67192535",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/E1FA/production/_131505875_p0gn6vjq.jpg",
          "publishedAt": "2023-10-23T14:22:21.6117025Z",
          "content": "Abdullah Shafique hits Mujeeb Ur Rahman for a six and four from consecutive balls as Pakistan reach 50 against Afghanistan during their Cricket World Cup game in Chennai. \r\nFOLLOW: Pakistan v Afghani… [+33 chars]"
        },
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "The Associated Press",
          "title": "Bishan Bedi, India cricket great who claimed 266 test wickets, dies at 77",
          "description": "Bishan Bedi, the India cricket great whose dazzling left-arm spin claimed 266 test wickets, has died",
          "url": "https://abcnews.go.com/Sports/wireStory/bishan-bedi-india-cricket-great-claimed-266-test-104220722",
          "urlToImage": "https://i.abcnewsfe.com/a/ed440085-64ca-40ed-bc90-42c927b54de8/wirestory_0269bc33ab9919a0a7f5b9b0b731d042_16x9.jpg?w=992",
          "publishedAt": "2023-10-23T12:14:13Z",
          "content": "NEW DELHI -- Bishan Bedi, the India cricket great whose dazzling left-arm spin claimed 266 test wickets, has died. He was 77.\r\nThe death of Bedi, who underwent multiple surgeries over the last two ye… [+2930 chars]"
        },
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "Bishan Singh Bedi: Indian cricket legend dies aged 77",
          "description": "One of the world's finest spin bowlers, Bishan Bedi took 1,560 first-class wickets, the highest by an Indian.",
          "url": "http://www.bbc.co.uk/news/world-asia-india-59047519",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EEDA/production/_121264116_gettyimages-1314629114-594x594.jpg",
          "publishedAt": "2023-10-23T11:52:20.487131Z",
          "content": "Indian cricket legend Bishan Singh Bedi has died aged 77 after a prolonged illness.\r\nHe was battling age-related illnesses and had undergone a few surgeries in recent years.\r\nBedi, regarded as one of… [+5251 chars]"
        },
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "World Cup: Pakistan bat first against Afghanistan",
          "description": "Follow live text, in-play video clips and radio commentary as Pakistan play Afghanistan in the Men's Cricket World Cup 2023.",
          "url": "http://www.bbc.co.uk/sport/live/cricket/66858465",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2023-10-23T08:37:19.4245087Z",
          "content": "Pakistan: Imam ul-Haq, Abdullah Shafique, Babar Azam (capt), Muhammad Rizwan (wk), Saud Shakeel, Iftikhar Ahmed, Shadab Khan, Usama Mir, Hassan Ali, Shaheen Afridi, Haris Rauf. \r\nAfghanistan: Rahmanu… [+182 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Shubi Arun",
          "title": "LIVE: Pakistan vs Afghanistan – ICC Cricket World Cup 2023",
          "description": "Follow live updates as Pakistan face rivals Afghanistan in the Cricket World Cup at the MA Chidambaram Stadium, Chennai.",
          "url": "http://www.aljazeera.com/sports/liveblog/2023/10/23/live-pakistan-vs-afghanistan-icc-cricket-world-cup-2023",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/AP23296462057113-1698065607.jpg?resize=1920%2C1440",
          "publishedAt": "2023-10-23T06:27:42Z",
          "content": "blinking-dot\r\nLive MatchLive Match, \r\nFollow live updates as Pakistan face rivals Afghanistan in the Cricket World Cup at the MA Chidambaram Stadium, Chennai."
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor() {
        super();
        console.log("Hello I am a constructor from News Component.");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}
             newsUrl={element.url}/>
            </div>
        })}
           
        </div>
      </div>
    );
  }
}

export default News;
