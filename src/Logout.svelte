<script>
	import { islogin, mode } from './stores.js';

  function logout() {
    $islogin = false;
    $mode = '';
  }
</script>

<button type="button" on:click={logout}>Log Out</button>

<style>
button {
  background-color: #04AA6D;
  color: white;
  padding: 20px 30px;
  border: none;
  cursor: pointer;
  width: 100%;
  display: inline-block;
}

button:hover {
  opacity: 0.8;
}
</style>