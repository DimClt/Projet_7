
-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `article_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `date_document` datetime NOT NULL,
  `article_text` text NOT NULL,
  `author` smallint(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`article_id`),
  KEY `author` (`author`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`article_id`, `title`, `date_document`, `article_text`, `author`) VALUES
(4, 'azaz', '2021-04-02 17:17:06', 'azaz', 130),
(5, 'test ', '2021-04-06 19:43:32', 'validation', 128);
