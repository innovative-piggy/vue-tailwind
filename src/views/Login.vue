<template>
    <div class="login-card-wrapper px-3">
        <div class="login-card mx-auto mt-12 mb-12 rounded bg-tb-primary max-w-full">
            <p class="login-title text-22 text-tb-black font-bold">Login</p>
            <div class="login-card-content-wrapper flex justify-center relative">
                <div class="login-form-wrapper w-1/2 pr-16 pt-6">
                    <form action="/" method="post" class="flex flex-col items-center">
                        <input
                            name="username"
                            type="text"
                            class="placeholder-tb-primary-dark login-username form-input w-full rounded-full outline-none border-transparent px-8 mb-5"
                            placeholder="Username or e-mail address"
                        />
                        <input
                            name="password"
                            type="password"
                            class="placeholder-tb-primary-dark login-password form-input w-full rounded-full outline-none border-transparent px-8 mb-5"
                            placeholder="Password"
                        />
                        <button
                            type="submit"
                            class="bg-tb-blue rounded-full w-full py-3 text-center text-lg text-white mb-4 transition duration-200 hover:bg-tb-blue-dark"
                        >Login</button>
                        <router-link to="/resetpassword" class="text-tb-blue">Forgot Password</router-link>
                    </form>
                </div>
                <div
                    class="social-login-wrapper flex flex-col items-center w-1/2 pl-16 border-l border-white pt-6 pb-1"
                >
                    <router-link
                        to="/"
                        class="border-2 border-tb-fb py-3 rounded-full w-full text-center text-tb-fb flex justify-center mb-4"
                    >
                        <span>
                            <img src="../assets/images/facebook-color.svg" alt />
                        </span>
                        <span class="ml-4">Sign in with Facebook</span>
                    </router-link>
                    <router-link
                        to="/"
                        class="border-2 border-tb-google py-3 rounded-full w-full text-center text-tb-google flex justify-center mb-5"
                    >
                        <span>
                            <img src="../assets/images/google-color.svg" alt />
                        </span>
                        <span class="ml-4">Sign in with Google</span>
                    </router-link>
                    <router-link
                        to="/signup"
                        class="text-tb-blue mt-2"
                    >Dont have an account? Create one</router-link>
                </div>
                <div
                    class="divider-badge absolute text-tb-primary-dark font-bold p-4 bg-tb-primary"
                >Or</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style scoped>
.login-card {
    width: 930px;
    height: 384px;
    padding: 50px;
}
.login-form-wrapper input {
    padding-top: 12px;
    padding-bottom: 12px;
}
.login-form-wrapper button {
    padding-top: 11px;
    padding-bottom: 12px;
}
.divider-badge {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
