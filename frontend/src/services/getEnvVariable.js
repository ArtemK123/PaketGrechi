export default function getEnvVariable (variable) {
    const value = process.env[variable];
    if (value === undefined) {
        throw new Error(`Can't read value of the environment variable ${variable}`);
    }
    return value;
};