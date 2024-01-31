<script setup>
import { closeFairnessPolicy } from '@/components/globals/footer/Footer.events.js'
</script>

<template>
  <div @click="closeFairnessPolicy" class="popup">
    <div @click.stop class="popup__content">
      <div @click="closeFairnessPolicy" class="popup__content-close">
        <img src="/images/icons/close.svg" alt="" />
      </div>
      <div class="popup__content-title">Fairness Policy</div>
      <div class="popup__content-text">
        <div class="text">
          1. Introduction<br /><br />

          This Fairness Policy outlines the principles and procedures adopted by
          our Gaming Platform, operating under the Curacao license (hereinafter
          referred to as the "Platform" or "We"), to ensure the fairness and
          integrity of our online Platform.<br /><br />

          Random Number Generator (RNG) 1 RNG Certification: The core of our
          commitment to fairness lies in our use of a certified Random Number
          Generator (RNG) for all games on our platform. Our RNG undergoes
          rigorous testing and certification by independent third-party auditors
          to ensure that the outcomes of our games are truly random and
          unbiased. 1 Testing Frequency: Our game providers conduct regular and
          comprehensive tests of the RNG to maintain its integrity. These tests
          are performed by accredited testing agencies to verify that the RNG
          consistently generates unpredictable and unbiased results. 1
          Transparency: The results of our RNG tests are made available to our
          players upon request, demonstrating our dedication to transparency in
          the gaming process.<br /><br />

          The Theoretical Return to Player (RTP) 1 The RTP is a theoretical
          calculation of the expected percentage of wagers that a specific game
          will return to player after a significant amount of plays (e.g.
          hundred of million game plays). While every single game play is
          unpredictable, and it is possible to win a big amount or lose your
          bet, the average return of a specific game in the long run will
          approach the Theoretical RTP value. The exact percentage of RTP is set
          up by our game providers in compliance with legal requirements and
          protected from any external interference. 1 To find more information
          about RTP of specific games please visit the information section of
          the game.<br /><br />

          2. Game Fairness<br /><br />

          Game Providers: We collaborate with licensed and trusted game
          providers that adhere to strict fairness standards. Before integrating
          any game into our platform, we thoroughly vet the provider's RNG
          testing and fairness practices. Regular Reviews: Our team conducts
          ongoing reviews of game performance and fairness to ensure that our
          players are consistently offered an equitable gaming experience.<br /><br />

          3. Responsible Gaming<br /><br />

          Player Protection: Alongside our fairness commitment, we prioritize
          responsible gaming. We provide resources for players to set deposit
          limits, take breaks, or self-exclude if necessary. More information
          you can find in our Responsible Gaming Policy and Self-Restraint
          Policy.<br />
          Fair Play Enforcement: In cases where responsible gaming guidelines
          are breached, we may take appropriate measures, including the
          suspension or termination of accounts, to ensure a safe and secure
          gaming environment for all players.<br /><br />

          4. Continuous Improvement<br /><br />

          Adaptive Measures: We continuously monitor advancements in the field
          of online gaming to implement new technologies and methods that
          enhance fairness and security.<br />
          Feedback and Reporting: We encourage our players to provide feedback
          and report any concerns related to fairness. We take such reports
          seriously and investigate promptly.<br /><br />

          5. Conclusion<br /><br />

          We are dedicated to upholding the same high standards of fairness,
          transparency, and integrity as established by reputable entities in
          the industry. This policy reflects our commitment to providing players
          with a safe, equitable, and enjoyable gaming experience that meets the
          standards of regulations.<br />
          We pledges to maintain its commitment to fair play through consistent
          RNG testing, independent auditing, and responsible gaming practices.
          By adhering to these principles, we aim to provide a gaming
          environment that players can trust and enjoy to the fullest extent.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopupFairnessPolicy';
</style>
