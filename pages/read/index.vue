<template>
<div class="page read index">
  {{ docs }}
</div>
</template>

<script>
import firebaseConfig from 'watchout-common-functions/config/firebase.config'
import firebase from 'firebase/app'
import 'firebase/firestore'

if(firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig.projects.bunko)
}

let db = firebase.firestore()
db.settings(firebaseConfig.db)

export default {
  async asyncData() {
    let snapshot = await db.collection('docs').get()
    let docs = []
    if(snapshot) {
      snapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          data: doc.data()
        })
      })
    }
    return {
      docs
    }
  }
}
</script>
