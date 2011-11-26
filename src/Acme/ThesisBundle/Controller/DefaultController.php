<?php

namespace Acme\ThesisBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/",name="course__lesson__create")
     */
    public function indexAction()
    {
        return $this->render('AcmeThesisBundle:Welcome:layout.html.twig');
    }
}
