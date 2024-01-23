<script setup>
import { closeGamingPolicy } from '@/components/globals/footer/Footer.events.js'
</script>

<template>
  <div @click="closeGamingPolicy" class="popup">
    <div @click.stop class="popup__content">
      <div @click="closeGamingPolicy" class="popup__content-close">
        <img src="/images/icons/close.svg" alt="" />
      </div>
      <div class="popup__content-title">Responsible Gaming Policy</div>
      <div class="popup__content-text">
        <div class="text">
          1. Introduction<br /><br />

          This Responsible Gaming Policy outlines the commitments and measures
          established by JetTon Gaming Platform, operating under the Curacao
          license (hereinafter referred to as the "Platform", "JetTon" or "We"),
          to promote responsible gaming practices and provide a safe and
          enjoyable gaming environment for our players.<br /><br />

          2. Player Protection and Support<br /><br />

          Awareness and Education: We are committed to raising awareness about
          responsible gaming and providing our players with the necessary
          information to make informed decisions.<br /><br />

          Preventing Underage Gaming: We have implemented stringent age
          verification processes to prevent underage individuals from accessing
          our Platform. Underage gaming is against the law and is an offense
          (punishable act). On our Platform it is forbidden to play to persons
          under the age of 18 or the age of legal capacity, if it exceeds 18
          years in the jurisdiction of the country in which the player is
          located. We take its responsibility in respect of underage gaming very
          seriously and therefore reserve the right to ask for proof of age from
          any customer and to suspend their accounts until the necessary
          documents are provided.<br /><br />

          This requirement is specified in our Terms and Conditions, so all the
          non-adult players who try to register on the website will be
          considered violators of our Terms and Conditions. The JetTon reserves
          the right to report such violations to the competent authorities.<br /><br />

          3. Self-Assessment Tools: We provide self-assessment tools that allow
          players to assess their gaming habits and recognize potential
          issues.<br /><br />

          4. Deposit Limits: Players can set daily, weekly, or monthly deposit
          limits to ensure responsible spending.<br /><br />

          5. Time Limits: We offer the option to set time limits on gameplay to
          prevent excessive gaming sessions.<br /><br />

          6. Self-Restraint<br /><br />

          Self-Restraint: If you think you have started spending more money than
          you can afford, or if the game is starting to interfere with your
          daily routine, JetTon strongly recommends that you consider our
          Cooling-Off or Self-Exclusion features. During activation of any
          Self-Restraint features your gaming account remain inaccessible.<br />
          Cooling-Off Period: It is a light option for your self-restraint from
          gaming. Normally it is set for a short period of 24 hours, 7 days, 1
          month or, 3 months. Your request for activation Cooling-Off period
          will not be reported to the gaming authority and will not influence on
          your player’s reputation. You can shorten Cooling-Off period almost
          immediately from the date of receipt of the request by the
          Platform.<br />
          Self-Exclusion: is a strong measure of self-restraint. It can be
          activated either by you, or by Platform, if we note your addicted
          gaming behavior. We offer self-exclusion options of varying durations
          to allow players to take a break from gaming if they feel their habits
          are becoming problematic. Self-Exclusion lasts 6 months, 1 year or 2
          years, or undefined period. The fact of activation Self-Exclusion
          feature must be reported to the gaming authority. You can shorten
          Self-Exclusion period (in case it was activated by you) not earlier
          than 24 h from the moment of receipt of the request by the
          Platform.<br />
          More information regarding our Self-Restraint measures is outlined in
          our Self-Restraint Policy.<br /><br />

          7. Support for Problem Gamblers<br /><br />

          External Support Organizations: We provide contact information for
          reputable organizations that specialize in helping individuals with
          gaming addiction, such as Gamblers Anonymous, GamCare, and
          BeGambleAware.<br />
          Links to Websites: For more information about responsible gaming
          resources, please visit the following links:<br />
          Gamblers Anonymous: https://www.gamblersanonymous.org/<br />
          GamCare: https://www.gamcare.org.uk/<br />
          BeGambleAware: https://www.begambleaware.org/<br />
          We encourage all players to play responsibly and seek help if needed.
          You are also welcome to our customer support chat, and we will provide
          you with exhaustive information regarding prevention or self-control
          addictive gaming behavior.<br /><br />

          8. Responsible Marketing and Advertising<br /><br />

          Avoiding Vulnerable Audiences: We adhere to strict guidelines to
          ensure that our marketing and advertising activities do not target
          vulnerable or underage audiences.<br />
          Promotion of Responsible Gaming: Our marketing materials include
          responsible gaming messages and information about accessing support
          resources.<br /><br />

          9. Monitoring and Enforcement<br /><br />

          Continuous Monitoring: We monitor player behavior and activity
          patterns to detect signs of potential gaming-related issues.<br />
          Taking Action: In cases where responsible gaming guidelines are
          breached, we take appropriate measures, including suspending or
          terminating accounts, to ensure a safe and responsible gaming
          environment.<br /><br />

          10. Collaboration with Regulatory Authorities<br /><br />

          Compliance: We align our responsible gaming practices with the
          requirements set by Laws of Curaçao. Continual Improvement: We stay
          updated with the latest developments in responsible gaming practices
          to continuously improve our policies and procedures.<br /><br />

          11. Conclusion<br /><br />

          At JetTon, we prioritize the well-being of our players and are
          committed to promoting responsible gaming habits. This Responsible
          Gaming Policy reflects our dedication to providing a secure and
          enjoyable gaming environment while adhering to the highest standards
          of industry regulations. By implementing these measures, we strive to
          create a positive gaming experience that places the safety and
          satisfaction of our players at the forefront.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopupGamingPolicy';
</style>
