<script>
  import { islogin, mode } from './stores.js';
	import Login from './Login.svelte';
  import Logout from './Logout.svelte';
  import Menu from './Menu.svelte';
  import Profile from './Profile.svelte';
  import SJ from './SJ.svelte';
  import SJall from './SJall.svelte';
  import SJquota from './SJquota.svelte';
  import Enroll from './Enroll.svelte';
  import Timetable from './Timetable.svelte';
  import Review from './Review.svelte';
  import Instructionalmedia from './Instructionalmedia.svelte';
  import Howto from './Howto.svelte';
  import Contact from './Contact.svelte';

</script>

{#if !$islogin}
  <Login />
{:else}
  <Logout />
  {#if $mode == 'menu'}
    <Menu />
    {:else if $mode == 'Profile'}
      <Profile />
    {:else if $mode == 'SJ'}
      <SJ />
      {:else if $mode == 'SJall'}
        <SJall />
      {:else if $mode == 'SJquota'}
        <SJquota />
    {:else if $mode == 'Enroll'}
      <Enroll />
    {:else if $mode == 'Timetable'}
      <Timetable />
    {:else if $mode == 'Review'}
      <Review />
    {:else if $mode == 'Instructionalmedia'}
      <Instructionalmedia />
    {:else if $mode == 'Howto'}
      <Howto />
    {:else if $mode == 'Contact'}
      <Contact />
  {/if}
{/if}
