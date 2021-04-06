
-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `comment_article` smallint(5) UNSIGNED NOT NULL,
  `comment_author` smallint(5) UNSIGNED NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_text` text NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `comment_article` (`comment_article`),
  KEY `comment_author` (`comment_author`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
