<script>
	import { quote , origin } from '$lib/stores/quotesv';
</script>

<div class="card card-border border-base-300 bg-error text-white">
    <div class="card-body">
        <div class="text-left">
            <div class="card-title text-sm">
                <span class="text-3xl text-warning font-bold">" </span>
                <span class="hyphens-auto">{$quote}</span>
                <span class="text-3xl text-warning font-bold"> "</span>
            </div>
        {#if ($origin !== undefined)}
            <span class="text-xs">- {$origin}</span>
        {/if}
        </div>
    </div>
</div>