<script>
import axios from "axios";

  export default {
    name: 'Axios',
    props: {
      country: String,
    },
    methods: {
      function() {
        axios
        .get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=8839b49b1628405d90760d4384c02658')
        .then(res => {
            this.post = res.data.articles;
            console.dir(this.post)
        })    
        }
    },
    data() {
    return {
      post: null,
    };
    },
    watch: {
      country: function(newCountry) {
        localStorage.setItem("country", newCountry)
      }
    },    
  };
</script>