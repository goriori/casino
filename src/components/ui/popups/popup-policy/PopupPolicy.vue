<script setup>
import { closePolicy } from '@/components/globals/footer/Footer.events.js'
</script>

<template>
  <div @click="closePolicy" class="popup">
    <div @click.stop class="popup__content">
      <div @click="closePolicy" class="popup__content-close">
        <img src="/images/icons/close.svg" alt="" />
      </div>
      <div class="popup__content-title">Dispute Resolution Policy</div>
      <div class="popup__content-text">
        <div class="text">
          1. Introduction<br /><br />

          This Dispute Resolution Policy outlines the procedures and mechanisms
          established by JetTon Gaming Platform, operating under the Curacao
          license (hereinafter referred to as the "Platform", "JetTon" or "We"),
          to address and resolve disputes that may arise between the JetTon and
          its players. We have formulated this policy to ensure transparency,
          fairness, and effective resolution processes.<br />
          Please keep in mind:<br />
          Our Terms and Conditions are governed by the laws of Curacao.<br />
          You agree that any dispute, controversy or claim arising out of or in
          relation to our Terms and Conditions, or violation, termination or
          invalidity thereof, shall be transferred to the exclusive jurisdiction
          of Curacao.<br /><br />

          2. Communication Channels<br /><br />

          Customer Support: We encourage players to first contact our dedicated
          customer support team to address any concerns, questions, or disputes
          they may have. Our customer support team is available through live
          chat and telegram-bot or via email info@jetton.games.<br />
          Comprehensive Information: Players are encouraged to provide as much
          relevant information as possible when submitting a dispute, including
          account details, transaction history, and a detailed description of
          the issue. Some complaints may require verification of your identity.
          If such information is required, we will ask you to provide us with
          copies of your documents.<br /><br />

          3. Internal Review and Resolution<br /><br />

          Prompt Review: Upon receiving a dispute, our customer support team
          will initiate an internal review of the matter in a timely manner
          (within 48 hours). Be notified some issues may take more time up to 30
          calendar days.<br />
          Transparent Communication: We will keep the involved parties informed
          of the progress of the investigation and any relevant updates during
          the resolution process.<br />
          Resolution Proposal: Based on the review, we will propose a resolution
          that aims to be fair and in accordance with our Terms and Conditions,
          as well as the regulations set by Laws of Curaçao.<br /><br />

          4. Escalation Process<br /><br />

          Unresolved Disputes: If the player is not satisfied with the
          resolution proposed by our customer support team, they have the option
          to escalate the dispute to a higher authority within our
          organization.<br />
          Internal Escalation Review: The escalated dispute will be reviewed by
          a higher-level team to ensure that all possible avenues for resolution
          have been explored.<br /><br />

          5. Alternative Dispute Resolution (ADR)<br /><br />

          ADR Providers: In the event that an internal resolution cannot be
          achieved, players have the option to direct their complaints to
          Antillephone N.V.: complaints@gaminglicences.com<br />
          The complaint form is also available by clicking on our license
          verification icon.<br /><br />

          6. Fairness and Transparency<br /><br />

          Documentation: We maintain comprehensive records of all disputes,
          investigations, and resolutions to ensure transparency and
          accountability in our dispute resolution processes.<br />
          Timely Response: We strive to provide prompt responses to all disputes
          and ensure that players are kept informed throughout the resolution
          process.<br /><br />

          7. Conclusion<br /><br />

          At JetTon, we are dedicated to maintaining a fair and transparent
          gaming environment for our players. Our Dispute Resolution Policy is
          designed to address disputes promptly, transparently, and equitably,
          in line with the standards set by Laws of Curaçao.<br />
          By adhering to this Dispute Resolution Policy, we aim to uphold the
          trust of our players, ensure their satisfaction, and contribute to a
          positive and enjoyable gaming experience for all.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopupPolicy';
</style>
