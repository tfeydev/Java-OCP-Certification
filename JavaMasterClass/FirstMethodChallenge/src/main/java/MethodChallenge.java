public class MethodChallenge {

    public static void main(String[] args) {

    int highScorePostion = calculateHighScorePosition(1500);
    displayHighScorePosition("Tim", highScorePostion);

    highScorePostion = calculateHighScorePosition(1000);
    displayHighScorePosition("Bob", highScorePostion);

    highScorePostion = calculateHighScorePosition(500);
    displayHighScorePosition("Percy", highScorePostion);

    highScorePostion = calculateHighScorePosition(100);
    displayHighScorePosition("Gilbert", highScorePostion);

    highScorePostion = calculateHighScorePosition(25);
    displayHighScorePosition("James", highScorePostion);
    }

    public static void displayHighScorePosition(String playerName, int highScorePosition) {
        System.out.println(playerName + " managed to get into position "
            + highScorePosition + " on the high score list");
    }

    public static int calculateHighScorePosition(int playerScore) {

        int position = 4;
        if (playerScore >= 1000) {
            position = 1;
        } else if (playerScore >= 500) {
            position = 2;
        } else if (playerScore >= 100) {
            position = 3;
        }

        return position;
    }
}
