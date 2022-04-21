<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
  let modal;
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
  }
</script>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header"></slot>
	<hr>
	<slot></slot>
	<hr>

	<button autofocus on:click={close}>CLOSE</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.02);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 110%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 1em;
		background: #fffaff;
    opacity: 0.99;
    color: #1a1a1a;
	}

	button {
		display: block;
    background-color: #04aa6d;
    color: #ffffff;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 5px;
    padding-left: 5px;
    border-color: #fdf5e6;
    border-radius: 7px;
	}

</style>