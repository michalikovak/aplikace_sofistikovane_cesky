<template>
  <div>
    <img id="welcomeFox" :src="welcomefox" alt="Welcome Fox" />
  </div>
</template>

<script>
import welcomefox from "../assets/img/welcomeFox.png";
export default {
  name: "App",
  data() {
    return {
      welcomefox
    };
  }
};
</script>

<style>
/*#welcomeFox {
  width: 70vh;
}
#tail {
  animation: tail 1s ease-in-out infinite alternate;
  transform-origin: center;
}

#leftArmPen {
  animation: leftArm 1s ease-in-out infinite alternate;
  transform-origin: center;
}

#rightArmPaper {
  animation: rightArm 1s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes tail {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(5deg);
  }
}

@keyframes leftArm {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(4deg);
  }
}

@keyframes rightArm {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(8deg);
  }
}*/
</style>


