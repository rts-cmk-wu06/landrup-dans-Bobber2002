# Svendeprøve dokumentation Christoffer Langkilde - WU06 - okt 2022


# Tech-Stack

### React:

Jeg har valgt at bruge React i mit projekt, fordi det er det framework/library jeg selv kender bedst. React er også meget fleksibelt, og tillader en som udvikler at spare en masse tid, og kost af udvikling pga. Reacts modulare struktur. 

Det er også nemt at opretholde Reacts kode da det ikke går i stykker selvom der er ændringer. React er også designet til at være et hurtigt framework, så man kan køre komplekse sites ekstremt hurtigt. Det er gjort ved at lave en virtuel DOM der kører server-sided.

React giver også mulighed for genbrugelige komponenter. Det er et af mine egne yndlings funktioner som React tilbyder. Det gør det super nemt at lave små komponenter, som man ved skal bruges flere steder.

React har også en masse packages der gør react et endnu stærkerer værktøj, som bringer mig videre til…


### Tailwind CSS:

Tailwind er det css framework jeg har valgt at tage med i mit projekt. Det er det css framework jeg selv er bedst bekendt med, og det er den måde jeg godt kan lide at arbejde med css. Man kan nemlig spare meget tid på bare at have ens css og html i samme dokument, i stedet for at skifte mellem 2 dokumenter.

Tailwind tilbyder en hurtig og ekstrem nem styling af ens site der er kendt som utility-first. Det hele bliver stylet igennem classes der bliver sat på ens elementer, og alle classes gør noget forskelligt ved ens element. Alt ens Tailwind css bliver lavet om til normal web læseligt css på millisekunder, og selve frameworket er ekstremt kompakt og fylder næsten ingenting. Med Tailwind kan man lave ens design et til et med ens mockup, og hvis Tailwind mangler noget man skal bruge, så kan man i Tailwinds config fil helt selv skabe nye klasser lige til ens behov.

### Axios:

Jeg har valgt Axios fordi jeg har arbejdet mere med det end fetch.
Axios har også nogle funktioner som fetch ikke har der er meget nyttige at have. Axios har muligheden for at annullere HTTP requests eller sætte en timeout på dem, samt at Axios automatisk transformere JSON data, og det er kun nogle af tingene.

## Versionsstyring:

Jeg har brugt github til versionsstyring. Github tillader mig at pushe mit arbejde ud på nettet, så jeg kan tilgå det lige meget hvor jeg er. Jeg har pushet hver gang jeg har færdiggjort en opgave, og sammen med det har jeg lavet nogle gode beskrivelser, samt labels der fortæller om der er bugs eller om der er nye features.




## Deploy process:

Min deploy process foregår gennem netlify, der automatisk opdatere/builder min netlify side, når der kommer nye changes til mit projekt. (I dette tilfælde min fork)


## Tech-Stack perspektivering:

### React:
React køre på en virtuel DOM og derfor har lynhurtige hastigheder. Det gør angular ikke

### Tailwind css:

Tailwind har gode predefined klasser man nemt kan bruge. Udover det kan man nemt oprette egne klasser på sekunder, der passer lige til ens behov. Det er meget svære med bootstrap.

### Axios:

Axios har automatisk JSON konvertering, og HTTP request annullering. Det har fetch ikke.  



## Projekt perspektivering:

Appen kunne helt klart få tilføjet flere funktioner. det ville være godt med “premium aktiviteter” til evt. guld medlemmer. Det ville også være godt hvis instruktører kunne annullere aktiviteter, hvis det skulle være nødvendigt. Appen kunne også blive udviklet til at virke på desktop og andre platforme.


## Kode til særlig bedømmelse:

### Kode fra Search.js

```javascript
  let sortedActivities = [];
  let timeout;


  function handleSearch(e) {
    e.preventDefault();

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      sortedActivities = [];
      activities.map((activity) => {
        if (
          activity.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          !sortedActivities.includes(activity) &&
          e.target.value.length !== 0
        ) {
          sortedActivities.push(activity);
        }
        // console.dir(sortedActivities);
      });
      setSortedActivitiesState(sortedActivities);
    }, 200);
  }
  
  
  const [activities, setActivities] = useState([]);
  const [sortedActivitiesState, setSortedActivitiesState] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  
  /// 
        <input
          onChange={(e) => {
            handleSearch(e);
          }}
          className="bg-transparent outline-none border-none text-white"
          type="text"
        />
          {sortedActivitiesState.length > 0 ? (
            sortedActivitiesState.map((activity) => {
              // console.log(sortedActivitiesState.length);
              return (
                <SwiperSlide key={activity.id}>
                  <Activity activity={activity} />
                </SwiperSlide>
              );
            })
          ) : (
            <p className="text-themewhite text-lg">
              Det ser ud som om ingen aktiviter matcher din søgning.
            </p>
          )}
```
