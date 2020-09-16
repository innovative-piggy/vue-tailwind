<template>
  <div id="leave-feedback-component">
    <div class="rounded bg-tb-primary p-4 xl:p-6 mt-10">
      <p class="text-22 text-tb-black font-bold">
        Meiung zu {{ data }} schreiben
      </p>
      <p class="text-tb-primary-dark mt-2 leading-snug">
        Wir freuen uns, dass du eine Rezension zu dem Produkt
        {{ data }} verfassen möchtest.
        <br />
        <br />Bitte fülle dazu in den nächsten Schritten alle Felder aus.
        <br />
        <br />Bitte schreibe diese mit deinen eigenen Worten. Verwende keinen
        Inhalt aus anderen Quellen und schreibe nur zutreffende Fakten.
        <br />
        <br />
      </p>
      <p class="text-tb-black leading-snug">
        Wie viele Sterne würdest du diesem Produkt geben?
      </p>
      <p class="text-tb-primary-dark mt-1">1 = schlecht; 5 = sehr gut</p>
      <StarRating
        v-bind:rating="0"
        v-bind:read-only="false"
        v-bind:show-rating="false"
        v-bind:star-size="25"
        active-color="#FF7000"
        v-bind:padding="2"
        v-bind:increment="1"
        inactive-color="#EFF2F5"
        border-color="#FF7000"
        v-bind:border-width="2"
        class="mt-2"
      ></StarRating>
      <input
        type="text"
        class="form-input w-full rounded-full mt-8 placeholder-tb-primary-dark px-6 py-3 border-transparent"
        placeholder="Titel der Rezension"
      />
      <textarea
        name
        id
        rows="4"
        class="form-textarea rounded-25 w-full mt-4 border-transparent px-6 py-3 placeholder-tb-primary-dark"
        placeholder="Write Review here"
      ></textarea>
      <div class="main-button mt-6 mb-6 w-64">Submit</div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "LeaveFeedback",
  props: ["data"],
  components: {
    StarRating,
  },
};
</script>

<style scoped>
.rounded-25 {
  border-radius: 20px;
}
</style>
