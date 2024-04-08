new Vue({
    el: '#app',
    data: {
      basePlaceholder: "Название",
      placeholders: ["игры", "сериала", "фильма"],
      currentPlaceholderIndex: 0,
      currentLetterIndex: 0,
      isDeleting: false,
    },
    mounted() {
      this.animatePlaceholder();
    },
    methods: {
      animatePlaceholder() {
        const currentWord = this.placeholders[this.currentPlaceholderIndex];
        const delay = 150;
  
        setTimeout(() => {
          if (!this.isDeleting) {
            this.currentLetterIndex += 1;
            if (this.currentLetterIndex <= currentWord.length) {
              this.animatePlaceholder();
            } else {
              this.isDeleting = true;
              this.animatePlaceholder();
            }
          } else {
            this.currentLetterIndex -= 1;
            if (this.currentLetterIndex >= 0) {
              this.animatePlaceholder();
            } else {
              this.isDeleting = false;
              this.currentLetterIndex = 0;
              this.currentPlaceholderIndex = (this.currentPlaceholderIndex + 1) % this.placeholders.length;
              this.animatePlaceholder();
            }
          }
        }, delay);
      },
    },
    computed: {
      currentPlaceholder() {
        const currentWord = this.placeholders[this.currentPlaceholderIndex];
        return this.basePlaceholder + " " + currentWord.slice(0, this.currentLetterIndex);
      }
    }
  });