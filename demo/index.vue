<template>
    <section>123</section>
</template>

<script>
import schema from 'async-validator';
const descriptor = {
  name: {type: "string", required: true}
}
const validator = new schema(descriptor);
console.log(validator)
validator.validate({name: "muji"}, (errors, fields) => {
  if(errors) {
    return handleErrors(errors, fields);
  }
});

</script>
