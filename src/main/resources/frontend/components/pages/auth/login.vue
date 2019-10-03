<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="username" name="username" class="form-control" placeholder="Username"/>
                            </div>
                            <div class="form-group">
                                <input type="password" id="password" name="password" class="form-control" placeholder="Password"/>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary shadow btn-block">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default  {

    }
</script>

<style lang="scss" scoped>
    .card{
        margin-top: 200px;
    }

</style>